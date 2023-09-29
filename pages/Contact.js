



export default function Contact(){
    return(
        <div className='flex justify-center items-center mt-10'>

        <div className="w-full max-w-xl">
        <h1 className='text-center text-4xl text-niyuyello font-monteserat'>Contact</h1>

  {/**Form */}
    <form  method='post'className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4">
   <div className="mb-4">
   <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
    Full Name
  </label>
  <input 
  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
  name="Fullname"
  required
  type="text"
  placeholder="FullName"/>
</div>
<div className="mb-6">
  <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
    Email
  </label>
  <input
  name='Email'
  required

  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="email" placeholder="Email"/>

</div>

<div className="mb-6">
  <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
    Message
  </label>
  <textarea
  name='Message'
  placeholder="Leave a comment..."
  required

   id="message"
    rows="4"
    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></textarea>
</div>

<div className="flex items-center justify-center">
  <button className="mx-8 bg-adainyellow text-white px-4 py-2 rounded font-popins" type="submit">
    Submit
  </button>
  

  
</div>
</form>

</div>
            
            

        </div>
    )

}