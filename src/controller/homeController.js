import connection from '../configs/connectDB';

const getHomepage = (req, res) => {
    let data = [];
    connection.query(
        'SELECT * FROM `users`',
        (err, results, fields) => {
            // console.log(`>>Check mysql`);
            results.map((row) => {
                data.push({
                    id: row.id,
                    email: row.email,
                    address: row.address,
                    firstName: row.firstName,
                    lastName: row.lastName
                })
            })
            return res.render('./index.ejs', { dataUser: JSON.stringify(data) });
        }
    );
}


module.exports = {
    getHomepage
}