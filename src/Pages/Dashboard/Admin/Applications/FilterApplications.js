import React, { useState } from 'react';
import { Years } from '../../../../Utilities/Years';

const FilterApplications = ({ setSelectedValue }) => {
  const [selectedYear, setSelectedYear] = useState('');
  const allYears = Years(selectedYear);
  return (
    <div>
      <div className='flex justify-between gap-5'>
        <select
          onChange={(e) => setSelectedValue(e.target.value)}
          name='application'
          className='select select-bordered w-56 max-w-xs'>
          <option
            selected
            value=''>
            All Application
          </option>
          <option value='hallSeat'>Hall Seat</option>
          <option value='hallClearence'>Hall Clearence</option>
        </select>
        <select
          value={selectedYear || ''}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
          className='select select-bordered w-56 max-w-xs'>
          <option
            value=''
            selected>
            Select Session
          </option>
          {allYears?.map((yr, i) => (
            <option
              key={i}
              value={yr}>
              {yr}
            </option>
          ))}
        </select>
        <label className='label cursor-pointer'>
          <input
            type='checkbox'
            defaultChecked
            className='checkbox checkbox-success border-2'
          />
          <span className='label-text ml-2 font-semibold'>Father's Salary</span>
        </label>
        <label className='label cursor-pointer'>
          <input
            type='checkbox'
            defaultChecked
            className='checkbox checkbox-success border-2'
          />
          <span className='label-text ml-2 font-semibold'>Home Distance</span>
        </label>
      </div>
    </div>
  );
};

export default FilterApplications;
