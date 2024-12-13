import React from 'react'

export default function Addpage() {
    return (
        <>
            <title>Tambah Data Mahasiswa</title>
            <div className="grid grid-cols-12 gap-4 items-center">
                <div className=''>NPM</div>
                <div className='col-span-4'>
                    <input
                        type="text"
                        placeholder="Isi NPM"
                        className="input input-bordered input-success w-full" />
                </div>
                <div className='col-start-1'>Nama</div>
                <div className='col-span-4'>
                    <input
                        type="text"
                        placeholder="Isi Nama Mahasiswa"
                        className="input input-bordered input-success w-full" />
                </div>
                <div className='col-start-1'>Jurusan</div>
                <div className='col-span-4'>
                    <select defaultValue={""} className="select select-success w-full">
                        <option value={""} disabled>
                            Pilih Jurusan Mahasiswa
                        </option>
                        <option value={"Informatika"}>Informatika</option>
                        <option value={"Sistem Informasi"}>Sistem Informasi</option>
                        <option value={"Teknologi Informasi"}>Teknologi Informasi</option>
                        <option value={"Teknik Komputer"}>Teknik Komputer</option>
                        <option value={"Teknik Elektro"}>Teknik Elektro</option>
                        <option value={"Teknik Sipil"}>Teknik Sipil</option>
                    </select>
                </div>
                <div className='col-start-2 col-span-2'>
                    <button className="btn btn-active btn-neutral mr-5px w-28">Simpan</button>
                    <button className="btn btn-active ml-5px w-28">Batal</button>
                </div>
            </div>
        </>
    )
}
