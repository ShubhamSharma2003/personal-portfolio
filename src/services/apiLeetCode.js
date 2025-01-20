export async function fetchLeetCodeStats(username) {
    try {
      const response = await fetch(`https://leetcode-api-faisalshohag.vercel.app/${username}`)
      if (!response.ok) {
        throw new Error("Failed to fetch data")
      }
      return await response.json()
    } catch (error) {
      throw new Error("An error occurred while fetching data")
    }
  }
  
  