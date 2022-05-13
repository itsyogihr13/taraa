import { useEffect, useState } from "react";
import axios from "axios";

export const Form = () => {
  const [data, setData] = useState({
    username: "",
    passward: "",
  });
  const [getdata, setGetdata] = useState([]);

  function handlesort(e) {
    if (e.target.value === "high") {
      // getdata.sort((first, second) => first.username - second.username);
      getdata.sort((a, b) => {
        if (a.username > b.username) return 1;
        else return -1;
      });
      setGetdata([...getdata]);
    } else if (e.target.value === "low") {
      getdata.sort((a, b) => {
        if (a.username > b.username) return -1;
        else return 1;
      });
      setGetdata([...getdata]);
    }
    // console.log("Flats Data", flats);
  }

  const handle = (e) => {
    const { id, value } = e.target;
    setData({
      ...data,
      [id]: value,
    });
    // console.log(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3001/users", data).then(() => {
      alert("data added succesfully");
      setData({
        username: "",
        passward: "",
      });
    });
  };

  // useEffect(() => {
  async function get() {
    const tara = await axios.get("http://localhost:3001/users?limit=3&&page=1");
    const dat = await tara.data;
    setGetdata(dat);
  }
  // }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handle}
          type="text"
          name=""
          value={data.username}
          id="username"
          placeholder="name"
        />
        <input
          onChange={handle}
          type="text"
          value={data.passward}
          name=""
          id="passward"
          placeholder="age "
        />
        <button>submit</button>
      </form>
      <button onClick={get}>get</button>

      {getdata.map((data) => (
        <li key={data.id}>
          {" "}
          {data.username} {data.passward}
        </li>
      ))}

      <select name="" id="" onClick={handlesort}>
        <option value="">---sort</option>
        <option value="high">high</option>
        <option value="low">low</option>
      </select>
    </div>
  );
};
