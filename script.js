const SUPABASE_URL = "https://pscqpmtciovvyahnsqdz.supabase.co"
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."

async function fetchUsers() {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/users`, {
    method: "GET",
    headers: {
      "apikey": SUPABASE_KEY,
      "Authorization": `Bearer ${SUPABASE_KEY}`,
      "Content-Type": "application/json"
    }
  })
  const data = await res.json()
  console.log(data)
}

fetchUsers()
