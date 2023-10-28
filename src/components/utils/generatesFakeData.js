const fakeCustomersData = []

for (let i = 0; i < 5; i++) {
    const customerObject = {
        name: `${Math.floor(Math.random() * 1000)}AB${Math.floor(Math.random() * 100 + 1)}ZA`,
        age: randomNumber(),
        address: randomNumber() % 2 == 0 ? 'Dhaka' : 'Sylhet',
        createAt: new Date().toLocaleDateString(),
        updateAt: new Date().toLocaleDateString(),
        status: Math.random(['Active', 'Inactive'])
    }
    fakeCustomersData.push(customerObject)
}

function randomNumber() {
    return Math.ceil(Math.random() * 100) + Math.ceil(Math.random() * 5)
}

export default [fakeCustomersData, randomNumber]