import { Button, MenuItem, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export interface UserInfo {
  name: string;
  gender: string;
  lang: string;
}

const Home = () => {
  const history = useHistory();

  const [user, setUser] = useState<UserInfo>({
    name: "",
    gender: "Male",
    lang: "React",
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = () => {
    history.push("/exam", user);
  };

  return (
    <div
      style={{
        display: "grid",
        justifyContent: "center",
        alignContent: "center",
        height: "100vh",
        width: "100%",
        gap: "20px",
      }}
      data-testid="home"
    >
      <h3>Home</h3>
      <TextField
        name="name"
        value={user.name}
        onChange={handleInput}
        placeholder="Enter your name"
      />
      <TextField
        name="gender"
        value={user.gender}
        onChange={handleInput}
        select
      >
        <MenuItem value="Male">Male</MenuItem>
        <MenuItem value="Female">Female</MenuItem>
      </TextField>
      <TextField name="lang" value={user.lang} onChange={handleInput} select>
        <MenuItem value="React">React</MenuItem>
        <MenuItem value="NodeJS">NodeJS</MenuItem>
      </TextField>
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default Home;
