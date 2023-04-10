import pool from '../configs/connectDB';

const getHomepage = async (req, res) => {

    const [rows, fields] = await pool.execute('SELECT * FROM `users`');
    return res.render('./index.ejs', { dataUser: rows });
}

const getDetailPage = async (req, res) => {
    let userId = req.params.id;
    const [user, fields] = await pool.execute('SELECT * FROM `users` WHERE id = ?', [userId]);
    return res.send(JSON.stringify(user));
}

const createNewUser = async (req, res) => {

    let { firstName, lastName, email, address } = req.body;
    await pool.execute(`INSERT INTO users (firstName, lastName, email, address) VALUES (?, ?, ?, ?);`,
        [firstName, lastName, email, address]);
    // console.log('>>check req', req.body);
    return res.redirect('/');
}


module.exports = {
    getHomepage,
    getDetailPage,
    createNewUser
}