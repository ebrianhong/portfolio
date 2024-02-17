"use client";
import React, { useState, MouseEvent, useEffect } from "react";

interface GeoProps {
  lat: string;
  lng: string;
}

interface CompanyProps {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface AddressProps {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    [key: string]: GeoProps;
  };
}

interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    [key: string]: AddressProps;
  };
  phone: string;
  website: string;
  company: {
    [key: string]: CompanyProps;
  };
}

interface UserComponentProps {
  user: UserProps;
}

const UserCard = ({ user }: UserComponentProps) => {
  return <li>{user.name}</li>;
};

const AddressBook = () => {
  const [users, setUsers] = useState<UserProps[]>([] as UserProps[]);
  const [userId, setUserId] = useState<string>("1");
  useEffect(() => {
    // let ignore = false;

    const fetchUsers = async () => {
      const resp = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`,
      );
      const json = await resp.json();
      setUsers([json]);
    };
    fetchUsers();
    // if (!ignore) fetchUsers();

    // return () => {
    //   ignore = true;
    // };
  }, [userId]);

  // const handleFetchAddressClick = (e: MouseEvent) => {
  //   e.preventDefault();

  //   fetchUsers();
  // };
  return (
    <>
      <button type="button">Fetch Address</button>
      <ul>
        {users.map((user) => (
          <UserCard key={user.id} user={user}></UserCard>
        ))}
      </ul>
    </>
  );
};

export default AddressBook;
