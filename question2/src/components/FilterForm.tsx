import React, { useState } from 'react';

interface FilterFormProps {
  onSubmit: (filters: { [key: string]: string }) => void;
}

const FilterForm: React.FC<FilterFormProps> = ({ onSubmit }) => {
  const [filters, setFilters] = useState({
    company: '',
    category: '',
    top: '',
    minPrice: '',
    maxPrice: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(filters);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="company">
          Company
        </label>
        <select
          name="company"
          id="company"
          onChange={handleChange}
          value={filters.company}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          <option value="">Select Company</option>
          <option value="ANZ">ANZ</option>
          <option value="FLP">FLP</option>
          <option value="SUP">SUP</option>
          <option value="MYN">MYN</option>
          <option value="AZO">AZO</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="category">
          Category
        </label>
        <select
          name="category"
          id="category"
          onChange={handleChange}
          value={filters.category}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          <option value="">Select Category</option>
          <option value="Phone">Phone</option>
          <option value="Computer">Computer</option>
          <option value="TV">TV</option>
          <option value="Earphone">Earphone</option>
          <option value="Tablet">Tablet</option>
          <option value="Charger">Charger</option>
          <option value="mouse">Mouse</option>
          <option value="Keypad">Keypad</option>
          <option value="Bluetooth">Bluetooth</option>
          <option value="Pendrive">Pendrive</option>
          <option value="Remote">Remote</option>
          <option value="Speaker">Speaker</option>
          <option value="Headset">Headset</option>
          <option value="Laptop">Laptop</option>
        </select>
      </div>
      <div className="mb-4">
        <input
          type="number"
          name="top"
          placeholder="Top"
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <input
          type="number"
          name="minPrice"
          placeholder="Min Price"
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-6">
        <input
          type="number"
          name="maxPrice"
          placeholder="Max Price"
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Apply Filters
        </button>
      </div>
    </form>
  );
};

export default FilterForm;
