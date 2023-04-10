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
    return res.redirect('/');
}

const deleteUser = async (req, res) => {
    let userId = req.body.userId;
    await pool.execute('DELETE FROM users WHERE id = ?', [userId]);
    return res.redirect('/');
}

const editUserPage = async (req, res) => {
    let userId = req.params.userId;
    let [user] = await pool.execute('SELECT * FROM users WHERE id = ?', [userId]);
    return res.render('update.ejs', { dataUser: user[0] });
}

const postUpdateUser = async (req, res) => {
    let user = req.body;
    await pool.execute('UPDATE users SET firstName = ?, lastName = ?, email = ?, address = ? WHERE id =?',
        [user.firstName, user.lastName, user.email, user.address, user.id]);
    return res.redirect('/');
}

module.exports = {
    getHomepage,
    getDetailPage,
    createNewUser,
    deleteUser,
    editUserPage,
    postUpdateUser
}