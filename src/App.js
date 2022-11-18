
import React, { Component ,useState} from 'react'
import Plan from './Plan'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App()
 {

  const [items,setItems] = useState([]);
  const [text,setText] = useState("");

 const handleChange = e => {
    setText(e.target.value)
  }

  const handleAdd = e => {
    if (text !== "") {
      // const new_items = [...items, text];
      setItems([...items,text])
      setText("")
    }
  }
  const handleDelete = id => {
    console.log("Deleted", id);
    const Olditems = [...items]
    console.log("Olditems", Olditems);
    const itms = Olditems.filter((element, i) => {
      return i !== id
    })
    console.log("Newitems", itms);
    setItems(itms)
  }
    return (
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
            <h2 className="text-center"> Today's Plan </h2>
            <div className="container-fluid">
              <div className="row">
                <div className="col-9">
                  <input type="text" className="form-control" placeholder="Write Plan Here" value={text} onChange={handleChange} />
                </div>
                <div className="col-2">
                  <button className="btn btn-warning px-5 font-weight-bold" onClick={handleAdd}>Add</button>
                </div>
              </div>
              <div className="conatiner">
                <ul className="list-unstyled row m-5">
                  {
                    items.map((value, i) => {
                      return <Plan key={i} id={i} ele={value} sendData={handleDelete} />
                    })
                  }
                </ul>
                {/* <ul className="list-unstyled row m-5">
                  <Plan p={this.state.items} sendData={this.handleDelete} />
                </ul> */}
              </div>
            </div>

          </div>
        </div>
      </div>
    )
}

export default App;
