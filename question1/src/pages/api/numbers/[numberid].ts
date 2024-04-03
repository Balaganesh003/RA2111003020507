import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

let numbers: number[] = [];
const WINDOW_SIZE = 10;
const ACCESS_TOKEN: string = process.env.ACCESS_TOKEN as string;

interface ResponseData {
  windowPrevState: number[];
  windowCurrState: number[];
  numbers: number[];
  avg: string;
}

export default async function handler(req: any, res: any) {
  const { numberid } = req.query;

  let response;
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    };

    switch (numberid) {
      case 'p':
        response = await axios.get('http://20.244.56.144/test/primes', config);
        break;
      case 'f':
        response = await axios.get('http://20.244.56.144/test/fibo', config);
        break;
      case 'e':
        response = await axios.get('http://20.244.56.144/test/even', config);
        break;
      case 'r':
        response = await axios.get('http://20.244.56.144/test/rand', config);
        break;
      default:
        res.status(400).json({ error: 'Invalid numberid' });
        return;
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Error fetching numbers from third-party server' });
    return;
  }

  const numbersFromServer: number[] = response.data.numbers;

  let newNumbers: number[] = numbersFromServer.filter((number: number) => {
    switch (numberid) {
      case 'p':
        return isPrime(number);
      case 'f':
        return isFibonacci(number);
      case 'e':
        return isEven(number);
      case 'r':
        return true;
      default:
        return false;
    }
  });

  newNumbers = newNumbers.filter((value: number, index: number, self: number[]) => {
    return self.indexOf(value) === index;
  });

  numbers = [...numbers, ...newNumbers];

  if (numbers.length > WINDOW_SIZE) {
    numbers = numbers.slice(numbers.length - WINDOW_SIZE);
  }

  const average: number = numbers.reduce((acc: number, curr: number) => acc + curr, 0) / numbers.length;

  const windowPrevState: number[] = numbers.slice(0, numbers.length - newNumbers.length);
  const windowCurrState: number[] = numbers;

  const responseObj: ResponseData = {
    windowPrevState,
    windowCurrState,
    numbers,
    avg: average.toFixed(2),
  };

  res.status(200).json(responseObj);
}

function isPrime(num: number): boolean {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  let i: number = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }

  return true;
}

function isFibonacci(num: number): boolean {
  const fib: number[] = [0, 1];
  while (fib[fib.length - 1] < num) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }
  return fib.includes(num);
}

function isEven(num: number): boolean {
  return num % 2 === 0;
}
