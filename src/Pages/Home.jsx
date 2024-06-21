import { useState } from 'react';

const Home = () => {
  const [data, setData] = useState([
    {
      id: 1,
      nama: 'RAGIL SADEWA PASARIBU',
      angkatan: 21,
    },
    {
      id: 2,
      nama: 'AISYAH ROMAITO SIREGAR',
      angkatan: 21,
    },
    {
      id: 3,
      nama: 'TEGUH AHMADI ZEBUA',
      angkatan: 21,
    },
    {
      id: 4,
      nama: 'RAKSA ARYASATYA',
      angkatan: 21,
    },
    {
      id: 5,
      nama: 'FADHILAH AULIA MUTMAINAH',
      angkatan: 21,
    },
  ]);

  const [editing, setEditing] = useState(null);
  const [editData, setEditData] = useState({ nama: '', angkatan: '' });
  const [newData, setNewData] = useState({ nama: '', angkatan: '' });

  const handleAdd = () => {
    const newId = data.length ? data[data.length - 1].id + 1 : 1;
    setData([
      ...data,
      { id: newId, nama: newData.nama, angkatan: parseInt(newData.angkatan) },
    ]);
    setNewData({ nama: '', angkatan: '' });
  };

  const handleEdit = item => {
    setEditing(item.id);
    setEditData({ nama: item.nama, angkatan: item.angkatan });
  };

  const handleUpdate = id => {
    setData(
      data.map(item =>
        item.id === id
          ? { ...item, nama: editData.nama, angkatan: editData.angkatan }
          : item
      )
    );
    setEditing(null);
    setEditData({ nama: '', angkatan: '' });
  };

  const handleDelete = item => {
    if (window.confirm(`Yakin mau menghapus data ${item.nama}?`)) {
      setData(data.filter(i => i.id !== item.id));
    }
  };

  const handleCancel = () => {
    setEditing(null);
    setEditData({ nama: '', angkatan: '' });
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">DAFTAR MAHASISWA PUB</h2>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <ul>
          {data.map((item, index) => (
            <li
              key={item.id}
              className={`flex items-center justify-between p-4 ${
                index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-50'
              }`}
            >
              {editing === item.id ? (
                <>
                  <input
                    className="flex-1 ml-4 font-mono"
                    type="text"
                    value={editData.nama}
                    onChange={e =>
                      setEditData({ ...editData, nama: e.target.value })
                    }
                  />
                  <input
                    className="flex-1 ml-4 font-mono"
                    type="number"
                    value={editData.angkatan}
                    onChange={e =>
                      setEditData({
                        ...editData,
                        angkatan: parseInt(e.target.value),
                      })
                    }
                  />
                  <button
                    onClick={() => handleUpdate(item.id)}
                    className="ml-2 bg-blue-600 text-white px-2 py-1 rounded"
                  >
                    Update
                  </button>
                  <button
                    onClick={handleCancel}
                    className="ml-2 bg-yellow-500 text-white px-2 py-1 rounded"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <span className="font-mono text-lg">{index + 1}</span>
                  <span className="flex-1 ml-4 font-mono">
                    Nama: {item.nama}, Angkatan: {item.angkatan}
                  </span>
                  <button
                    onClick={() => handleEdit(item)}
                    className="ml-2 bg-blue-500 text-white px-2 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item)}
                    className="ml-2 bg-yellow-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold mb-2">Tambah Mahasiswa</h3>
        <input
          className="border px-2 py-1 mr-2"
          type="text"
          placeholder="Nama"
          value={newData.nama}
          onChange={e => setNewData({ ...newData, nama: e.target.value })}
        />
        <input
          className="border px-2 py-1 mr-2"
          type="number"
          placeholder="Angkatan"
          value={newData.angkatan}
          onChange={e =>
            setNewData({ ...newData, angkatan: parseInt(e.target.value) })
          }
        />
        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white px-4 py-1 rounded"
        >
          Tambah
        </button>
      </div>
    </div>
  );
};

export default Home;
