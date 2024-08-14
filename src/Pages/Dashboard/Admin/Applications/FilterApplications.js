import React from 'react';
import { Years } from '../../../../Utilities/Years';

const FilterApplications = ({
  selectedYear,
  setSelectedValue,
  setSelectedYear,
  setSalary,
  setDistance,
}) => {
  const allYears = Years(selectedYear);

  return (
    <div>
      <div className='md:flex md:justify-between gap-5'>
        <select
          onChange={(e) => setSelectedValue(e.target.value)}
          name='application'
          className='select select-bordered w-56 max-w-xs block'>
          <option value=''>All Application</option>
          <option value='hallSeat'>Hall Seat</option>
          <option value='hallClearence'>Hall Clearence</option>
        </select>
        <select
          value={selectedYear || ''}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
          className='select select-bordered w-56 md:mt-0 mt-3 max-w-xs block'>
          <option value=''>Select Session</option>
          {allYears?.map((yr, i) => (
            <option
              key={i}
              value={yr}>
              {yr}
            </option>
          ))}
        </select>
        <span className='flex gap-5'>
          <label className='label cursor-pointer'>
            <input
              onChange={(e) => setSalary(e.target.checked ? 'salary' : '')}
              type='checkbox'
              className='checkbox checkbox-success border-2'
            />
            <span className='label-text ml-2 font-semibold'>
              Father's Salary
            </span>
          </label>
          <label className='label cursor-pointer'>
            <input
              onChange={(e) => setDistance(e.target.checked ? 'distance' : '')}
              type='checkbox'
              className='checkbox checkbox-success border-2'
            />
            <span className='label-text ml-2 font-semibold'>Home Distance</span>
          </label>
        </span>
      </div>
    </div>
  );
};

export default FilterApplications;
