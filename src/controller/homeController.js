import pool from '../configs/connectDB';

const getHomepage = async (req, res) => {

    const [rows, fields] = await pool.execute('SELECT * FROM `users`');
    return res.render('./index.ejs', { dataUser: rows });
}



module.exports = {
    getHomepage
}