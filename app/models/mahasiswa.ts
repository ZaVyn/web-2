"use server"
import { PrismaClient, status } from "@prisma/client";

// deklarasi variable prisma
const prisma = new PrismaClient();

// buat fungsi (standar)
// untuk tampil mahasiswa
export async function getData(){
    // buat variabel untuk ORM (view data)
    const mahasiswa = await prisma.tb_mahasiswa.findMany({
        where: {
            status: 'Y'
        }
    });

    return mahasiswa;
}

// buat fungsi hapus data
// (update status Y >> N)
//function setUpdateStatus()
export const setUpdateStatus = async (npm: string) => {
    await prisma.tb_mahasiswa.updateMany({
        where: {
          npm : npm,
        },
        data: {
          status: 'N',
        },
      })
}
