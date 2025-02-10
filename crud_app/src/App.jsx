import './App.css'

function App() {


  return (
    <>
      <form action="" id='form'>
        <h2>CRUD app</h2>
        <div>

          <label htmlFor="Name">Name</label>
          <input type="text" placeholder='Enter the name' />
        </div>
        <div>
          <label htmlFor="Age">Age</label>
          <input type="number" placeholder='Enter the age' />
        </div>
        <div>
          <label htmlFor="Subject">Subject</label>
          <input type="text" placeholder='Enter the Subject' />
        </div>

        <button type='button' id='btn'> Create</button>
      </form>
      <div id='container'>
    <table id='table'>
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Subject</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>John</td>
                <td>23</td>
                <td>Maths</td>
                <td>
                    <button id='btn'>Edit</button>
                    <button>Delete</button>
                </td>
            </tr>
        </tbody><tbody>
            <tr>
                <td>John</td>
                <td>23</td>
                <td>Maths</td>
                <td>
                    <button id='btn'>Edit</button>
                    <button>Delete</button>
                </td>
            </tr>
        </tbody><tbody>
            <tr>
                <td>John</td>
                <td>23</td>
                <td>Maths</td>
                <td>
                    <button id='btn'>Edit</button>
                    <button>Delete</button>
                </td>
            </tr>
        </tbody><tbody>
            <tr>
                <td>John</td>
                <td>23</td>
                <td>Maths</td>
                <td>
                    <button id='btn'>Edit</button>
                    <button>Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>

    </>
  )
}

export default App
