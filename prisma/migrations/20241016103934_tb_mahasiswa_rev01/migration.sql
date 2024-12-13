-- CreateTable
CREATE TABLE `tb_mahasiswa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `npm` VARCHAR(10) NOT NULL,
    `nama` VARCHAR(50) NOT NULL,
    `jurusan` VARCHAR(20) NOT NULL,
    `status` ENUM('Y', 'N') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
