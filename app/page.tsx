"use client"
import { faPencil, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { getData, setUpdateStatus } from './models/mahasiswa';

// buat fungsi hapus data
function setDelete(npm: string, nama: string) {
  if (confirm(`Data Mahasiswa ${npm} - ${nama} ingin Dihapus ?`) == true) {
    setUpdateStatus(npm)
    alert(`Data Mahasiswa ${npm} - ${nama} Berhasil Dihapus ?`);
    // dibuat otomatis
    location.reload();
  }
  // } else {
  // alert('Cancel');
}

export default function MainPage() {
  // buat react hook (use state)
  const [getValue, setValue] = useState({});

  // buat fungsi fetchData
  async function fetchData() {
    setValue(await getData())

  }
  // buat react hook (use effect)
  useEffect(() => {
    fetchData()

  }, [])

  // getData()

  return (
    <>
    <title>View Data Mahasiswa</title>
      {/* kode js/ts */}
      <nav className="text-center mb-5 flex justify-end">

        <Link href={"/add"} className="btn btn-outline btn-success">
          <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
          Tambah Data Mahasiswa</Link>
      </nav>
      <table className='w-full'>
        <thead>
          <tr className='bg-blue-400 h-12 border border-slate-700'>
            <th className='w-10% border border-slate-700'>Aksi</th>
            <th className='w-10% border border-slate-700'>NPM</th>
            <th className='w-1/2 border border-slate-700'>Nama</th>
            <th className='w-30% border border-slate-700'>Jurusan</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(getValue).map((data: any, index: number) => (
            // <div key={index}>
            // <div>
            // {data.npm}
            // {data.nama}
            // {data.jurusan}
            // </div>
            // </div>

            <tr key={index}>
              <td className='border border-slate-700 p-5px text-center'>
                {/* icon edit */}
                <Link href={`/edit/${btoa(data.npm)}}`}
                  className='bg-purple-500 text-white py-5px px-10px rounded-lg	mr-5px text-sm	'>
                  <FontAwesomeIcon icon={faPencil}></FontAwesomeIcon>
                </Link>

                {/* icon delete */}
                <Link href={"/"} className='bg-red-700 text-white py-5px px-10px rounded-lg ml-5px text-sm'
                  onClick={() => { setDelete(data.npm, data.nama) }}>
                  <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                </Link>
              </td>
              <td className='border border-slate-700 p-5px text-center'>{data.npm}</td>
              <td className='border border-slate-700 p-5px text-justify'>{data.nama}</td>
              <td className='border border-slate-700 p-5px text-center'>{data.jurusan}</td>
            </tr>

          ))}

        </tbody>
      </table>
    </>
  )
}
