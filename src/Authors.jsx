
import './App.css'

function Authors() {
  const books = [

    { id: 1, title: "One Indian Girl", author: "Chetan Bhagat" },
    
    { id: 2, title: "The Archemist", author: "Paulo Coelho" },
    
    ]

  return (
    <>
     {books.map((x)=><div><h2>{x.title}</h2> <h1>{x.author}</h1></div>)} {/* div must required for one return */}
    </>
  )
}

export default Authors
