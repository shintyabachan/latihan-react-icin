import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Product from "./Product";

class App extends Component {
    constructor() {
        super();
        this.state = {
            products: [{
                nama: 'Shintya',
                ket: 'NIM: 12784',
                id: 100

            },{
                nama: 'Devi',
                ket: 'NIM: 410857',
                id: 50

            }],
            delete_clicked : 0
        };
    }

    hapusCard = (key) => {
        this.state.delete_clicked = !this.state.delete_clicked;
        this.setState({delete_clicked : this.state.delete_clicked});
        this.state.products.splice(key.target.id,1);
        this.setState({products : this.state.products});
    }

    // componentDidMount() {
    //     let api_url = 'https://my-json-server.typicode.com/techtona/product_api2/products';
    //     fetch(api_url)
    //         .then(response => response.json())
    //         .then(data => {
    //             this.setState({products: data});
    //         })
    //         .catch(function (e) {
    //             console.log(e);
    //         });
    // }

    hapusBaris = (key) => {
        this.state.products.splice(key, 1);
        this.setState({products: this.state.products});

    }

    handleSubmit = (e) => {
        e.preventDefault();

        let nama = this.refs.nama.value;
        let ket = this.refs.ket.value;
        let id = this.refs.id.value;

        // console.log(nama,ket,id);
        this.state.products.push({id, nama, ket});
        this.setState({mahasiswa: this.state.mahasiswa});

        this.refs.form.reset();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    render() {
        return (
            <div className="row">
                <div className="col l4">
                <h5 className="grey-text">Tambah Data Mahasiswa</h5>
                    <form ref="form" onSubmit={this.handleSubmit}>
                        <input type="text" ref="id" placeholder="ID Mahasiswa"/>
                        <input type="text" ref="nama" placeholder="Nama Mahasiswa"/>
                        <input type="text" ref="ket" placeholder="Keterangan"/>
                        <button type="submit" className="btn waves-effect">Save</button>
                    </form>
                </div>
                <div className="col l8">
                    {/*<table>*/}
                    {/*<thead>*/}
                    {/*<tr>*/}
                    {/*<th>Nama Produk</th>*/}
                    {/*<th>Harga</th>*/}
                    {/*<th>Pilihan</th>*/}
                    {/*</tr>*/}
                    {/*</thead>*/}
                    {/*<tbody>*/}
                    {/*{this.state.products.map((data, key) => {*/}
                    {/*return (*/}
                    {/*<tr key={data.id}>*/}
                    {/*<td>{data.judul}</td>*/}
                    {/*<td>{data.harga}</td>*/}
                    {/*<td>*/}
                    {/*<button onClick={()=>this.hapusBaris(key)} className="waves-effect waves-teal btn-small red">Hapus</button>*/}
                    {/*</td>*/}
                    {/*</tr>*/}
                    {/*)*/}
                    {/*})}*/}
                    {/*</tbody>*/}
                    {/*</table>*/}
                    {this.state.products.map((data, key) => {
                        return (
                            <Product deleteCard={this.hapusCard} ket={data.ket} nama={data.nama} key={key} id={key}/>
                        )
                    })}
                </div>

            </div>
        );
    }
}

export default App;
