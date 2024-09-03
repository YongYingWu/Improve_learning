import Sequelize from "sequelize";
const sequelize = new Sequelize('expresstest', 'expresstest', '@wyyc1232', {
    host: '43.139.11.133',
    dialect: 'mysql',
})
const User = sequelize.define('User',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        age: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    },
    {
        tableName: 'NODE_TEST', // 指定表格名称
        timestamps: false // 禁止 Sequelize 自动生成 createdAt 和 updatedAt 字段
    }
)

// create新增数据
async function createUser(name, age) {
    const user = await User.create({ name, age })
    return user.toJSON()
}

// findAll查找所有数据
async function findAllUser() {
    const users = await User.findAll()
    return users.map(user => user.toJSON())
}
// findByPk根据id查找单条数据
async function findUserById(id) {
    const user = await User.findByPk(id)
    return user.toJSON()
}
// 根据条件查找数据
async function findUserByCondition(name, age) {
    const users = await User.findAll({
        where: {
            name,
            age
        }
    })
    return users.map(user => user.toJSON())
}
// 更新数据
async function updateUser(id, name, age) {
    // const user = await User.update({ name, age }, { where: { id } })
    const user = await User.findByPk(id)
    if (user) {
        user.name = name
        user.age = age
        await user.save()
        console.log(user.toJSON())
    } else {
        console.log('User not found')
    }
    return user
}
// 删除数据
async function deleteUser(id) {
    const user = await User.findByPk(id)
    if (user) {
        await user.destroy()
        console.log('User deleted')
    } else {
        console.log('User not found')
    }
    return user
}
export default {
    User,
    createUser,
    findAllUser,
    findUserById,
    findUserByCondition,
    updateUser,
    deleteUser
}