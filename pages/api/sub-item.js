export default function handler(req, res) {
    res.status(200).json([
        {
            id: 1,
            judul: 'Persegi',
            img: '/cari_rumus.png'
        },

        {
            id: 2,
            judul: 'Persegi Panjang',
            img: '/cari_rumus.png'
        },

        {
            id: 3,
            judul: 'Lingkaran',
            img: '/cari_rumus.png'
        },

        {
            id: 4,
            judul: 'Segitiga',
            img: '/cari_rumus.png'
        },

        {
            id: 5,
            judul: 'Jajar Genjang',
            img: '/cari_rumus.png'
        },

        {
            id: 6,
            judul: 'Belah Ketupat',
            img: '/cari_rumus.png'
        },
    ])
  }
  