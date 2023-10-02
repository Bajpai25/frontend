import React from 'react'
function Home() {
  return (
    <div>
        <div className='p-3 flex flex-row justify-around   mt-3 '>
      <div className='px-3 pt-2 pb-2 border shadow-sm w-60'>
        <div className='text-center font-semibold text-2xl pb-1'>
          <h4>Admin</h4>
        </div>
        <hr/>
        <div className='text-xl'>
          <h5>Total: {}</h5>
        </div>
      </div>
      <div className='px-3 pt-2 pb-2 border shadow-sm w-60'>
        <div className='text-center font-semibold text-2xl pb-1'>
          <h4>Employee</h4>
        </div>
        <hr/>
        <div className='text-xl'>
          <h5>Total: {}</h5>
        </div>
      </div>
      <div className='px-3 pt-2 pb-2 border shadow-sm w-60'>
        <div className='text-center font-semibold text-2xl pb-1'>
          <h4>Salary</h4>
        </div>
        <hr/>
        <div className='text-xl'>
          <h5>Total: {}</h5>
        </div>
      </div>
    </div>
    <div className='mt-4 px-5 pt-6'>
        <h3 className='font-semibold text-3xl mb-4'>List of Admins</h3>
        <table className='shadow-sm shadow-gray-600'>
            <thead>
                <th>
                    <th className='p-2 text-xl'>Email</th>
                    <th className='p-2 text-xl'>Action</th>
                </th>
            </thead>
            <tbody>

            </tbody>
        </table>
    </div>
    </div>
  )
}

export default Home