import pool from "../configs/connectDB";

const getAllUsers = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `users`');
    return res.status(200).json({
        message: 'ok',
        data: rows
    })
}

const createNewUser = async (req, res) => {

    let { firstName, lastName, email, address } = req.body;
    if (!firstName || !lastName || !email || !address) {
        return res.status(200).json({
            message: 'Missing body params'
        })
    }
    await pool.execute(`INSERT INTO users (firstName, lastName, email, address) VALUES (?, ?, ?, ?);`,
        [firstName, lastName, email, address]);


    return res.status(200).json({
        message: 'ok'
    })
}

const updateUser = async (req, res) => {
    let { firstName, lastName, email, address, id } = req.body;
    if (!firstName || !lastName || !email || !address) {
        return res.status(200).json({
            message: 'Missing body params'
        })
    }
    await pool.execute('UPDATE users SET firstName = ?, lastName = ?, email = ?, address = ? WHERE id = ?',
        [firstName, lastName, email, address, id]);
    return res.status(200).json({
        message: 'ok'
    })
}


const deleteUser = async (req, res) => {
    let userId = req.query.id;
    //Nếu muốn lấy userId bằng param thì đổi lại link :id
    await pool.execute('DELETE FROM users WHERE id = ?', [userId]);
    return res.status(200).json({
        message: 'ok'
    })
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}