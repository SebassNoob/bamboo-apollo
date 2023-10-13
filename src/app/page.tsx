import Image from 'next/image';
import styles from './page.module.css';

import axios from 'axios';

async function getData() {
  const response = await axios.get('http://localhost:3000/api/');

  return response.data;
}
export default async function Home() {
  const data = await getData();
  return (
    <>
      <p>{data}</p>
    </>
  );
}
