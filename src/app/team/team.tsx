import axios from "axios";

type User = {
  name: {
    first: string
    last: string
  }
  email: string
  picture: {
    thumbnail: string
  }
}
export default async function RandomUsersPage() {
  const response = await axios.get('https://randomuser.me/api/?page=3&results=10&seed=abc')
  const users: User[] = response.data.results

  return (
    <div className="p-6">
      <h1 className="container justify-center items-center text-center text-xl font-bold p-10 mb-4">OUR TEAM</h1>
    <p className=" p-10 mb-4 text-gray-700 justify-center-safe">
      Our geodetic survey team specializes in providing precise and reliable surveying solutions. 
      With a commitment to excellence, we ensure accurate data collection and analysis for all your geospatial needs.
    </p>
      <ul className="container p-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {users.map((user, index) => (
          <li key={index} className="border p-4 rounded shadow">
            <img
              src={user.picture.thumbnail}
              alt={`${user.name.first} ${user.name.last}`}
              className="rounded-full mb-2"
            />
            <div className="font-medium">{user.name.first} {user.name.last}</div>
            <div className="text-sm text-gray-500">{user.email}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}