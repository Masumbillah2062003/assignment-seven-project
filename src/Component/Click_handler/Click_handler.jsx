import PropTypes from 'prop-types';

const Click_watch = ({count}) => {
    
    return (
        <div className='border-[#28282833] border p-7 rounded-[20px]'>
            <h1 className='text-2xl font-semibold text-center'>Want to cook : {count.length}</h1>
            <div> 
            <div  className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    {
                    count.map((watch, idx) => {
                        return(
                            <tbody key={idx} className="bg-base-100 rounded-2xl ">
                                <tr className='rounded-2xl'>
                                    <th>1</th>
                                    <td>{watch.preparing_time}</td>
                                    <td>{watch.calories}</td>
                                    <td className='bg-[#0BE58A] px-5 py-3 rounded-3xl cursor-pointer text-center'>Preparing</td>
                                </tr>
                            </tbody>
                            )
                        })
                    }
                    </table>
                </div>
            </div>
        </div>
    );
};

Click_watch.propTypes = {
    count: PropTypes.array.isRequired,

}


export default Click_watch;