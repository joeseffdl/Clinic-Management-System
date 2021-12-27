const mutations = require("./mutations")
// @ponicode
describe("mutations.updateClient", () => {
    test("0", () => {
        let result = mutations.updateClient({ allClients: { findIndex: () => 1 } }, { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = mutations.updateClient({ allClients: { findIndex: () => -100 } }, { id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = mutations.updateClient({ allClients: { findIndex: () => 100 } }, { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = mutations.updateClient({ allClients: { findIndex: () => 100 } }, { id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = mutations.updateClient({ allClients: { findIndex: () => 0 } }, { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = mutations.updateClient({ allClients: { findIndex: () => -Infinity } }, { id: "" })
        expect(result).toMatchSnapshot()
    })
})
