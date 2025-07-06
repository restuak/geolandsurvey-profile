import axios from "axios";
export default async function Team() {
    try {
         const geoTeam = await axios.get ("https://randomuser.me/api/?results=10")

    } catch (err) {
        throw err;
    }



    return (
        <div>

        </div>
    )
}