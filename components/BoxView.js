export default function boxview(data) {
    console.log(data.data)
    // const []

    const handleFilter = (e, subList) => {}

    return (
        <div>
            <h2>Filter Dokumen</h2>

            <form>
                {/* <div> */}
                    {/* <p>Bahasa</p>
                    <select>
                        <option value={0}>Pilih Bahasa</option>
                        { data.data[0].length == 0 ? "Loading . . ." : data.data[0].map((item) => <option value={item.id} key={item.id}>{item.name}</option>) }
                    </select> */}
                {/* </div> */}

                {/* <div> */}
                    {/* <p>Kategori</p>
                    <select>
                        <option value={0}>Pilih Bahasa</option>
                        { data.data[0].length == 0 ? "Loading . . ." : data.data[0].map((item) => <option value={item.id} key={item.id}>{item.name}</option>) }
                    </select> */}
                {/* </div> */}

                {/* <div> */}
                    <p >Sub Kategori</p>
                    <select>
                        <option value={0}>Pilih Sub Kategori</option>
                        { data.data[0].length == 0 ? "Loading . . ." : data.data[1].map((item) => <option value={item.id} key={item.id}>{item.name}</option>) }
                    </select>
                {/* </div> */}

                    {/* <button>Filter</button> */}
            </form>
    </div>
    )
}