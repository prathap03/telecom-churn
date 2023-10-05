import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen flex flex-col text-black w-[100%] overflow-y-auto bg-[#F4F6F8]">
      <Head>
        <title>Churn Prediction</title>
      </Head>
      
      <div className="bg-white flex justify-start gap-2 p-2 items-center  shadow-md h-[4rem]">
      {/* <h1>Title Bar</h1> */}
  
      <div className="flex flex-col">
      <div className="h-[0.75rem] md:h-[1.5rem] transition-all w-[1.5rem] md:w-[3rem] bg-red-500"></div>
      <div className="h-[0.75rem] md:h-[1.5rem] transition-all w-[1.5rem] md:w-[3rem] bg-[#731717]"></div>
      </div>
      <h1 className="font-semibold transition-all text-[1.2rem]  md:text-[2rem] ">Churn Prediction</h1>
      </div>
      <div className="flex items-center justify-center h-[15vh] transition-all  md:h-[30vh] ">
        <div className="flex flex-col gap-1 md:gap-2 items-center justify-center  h-[90%] outline-dashed outline-1 shadow-md rounded-md  w-[80%] bg-white">
        <Image className="md:mb-[1.5rem] mb-[0.5rem] transition-all scale-[70%] md:scale-100" src="/upload.png" width="100" height="100"/>
        <h1 className="p-1 font-semibold text-white text-[0.7rem] transition-all bg-blue-500 mb-3 md:mb-0 rounded-full md:p-2 hover:cursor-pointer hover:bg-blue-700">Select Churn Report (csv/xlsx)</h1>
        <h1 className="hidden transition-all ease-linear md:block font-semibold text-[1.1rem]">or drag & drop your files here</h1>
        </div>
      </div>
      <div className="ml-[1rem] md:ml-[3rem]">
          <h1 className="font-semibold md:text-[2rem]  ">Churn Details</h1>
      </div>
      <div className="flex  md:h-[50%] justify-center items-center">
      <div className="flex w-[95%] flex-col md:flex-row justify-around items-center p-4 gap-4 bg-[#EEEBEB] shadow-md  md:h-[95%] rounded-md">
        <div className="bg-[#FFDBDB]/[80%] md:w-[28%] w-[98%] flex flex-col md:flex-row gap-2 backdrop-blur-md p-2 rounded-xl md:h-[98%] shadow-md ">
          <div className="flex flex-col gap-2 h-[100%] w-[100%] 0 p-2">
            <div className="flex flex-col gap-[0.04rem]">
            <h1>Customer Id</h1>
            <input className="shadow-md" type="text" name="" id="" />
            </div>
            
            <div className="flex flex-col gap-[0.04rem]">
            <h1>Customer State</h1>
            <select className="h-[1.5rem] shadow-md">
              <option value="default" default  select>Select State</option>
              <option value="default">AAA</option>
              <option value="default">AAA</option>
              <option value="default">AAA</option>
              <option value="default">AAA</option>
            </select>
           
            </div>

            <div className="flex flex-col gap-[0.04rem]">
            <h1>Customer Tenure (in Months)</h1>
            <input className="shadow-md" type="text" name="" id="" />
            </div>

            <div className="flex flex-col gap-[0.04rem]">
            <h1>Customer Area Code</h1>
            <select name="area" className="h-[1.5rem] shadow-md">
              <option value="default" default select>Select State</option>
              <option value="1">AAA</option>
              <option value="2">AAA</option>
              <option value="3">AAA</option>
              <option value="4">AAA</option>
            </select>
           
            </div>

            <div className="flex flex-col gap-[0.04rem]">
            <h1>Voice Mail Subscription</h1>
            <select name="area" className="h-[1.5rem] shadow-md">
              <option value="default" default select>Yes/No</option>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
           
            </div>

            <div className="flex flex-col gap-[0.04rem]">
            <h1>International Tariff</h1>
            <select name="area" className="h-[1.5rem] shadow-md">
              <option value="default" default select>Yes/No</option>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
           
            </div>

            <div className="flex flex-col gap-[0.04rem]">
            <h1>No of Voice Mail</h1>
            <input className="shadow-md" type="text" name="" id="" />
            </div>

          </div>

          <div className="flex h-[100%] w-[100%]  p-2">

          <div className="flex w-[100%] md:w-auto flex-col gap-[0.04rem]">
            <h1>Calls to Customer Service</h1>
            <input className="shadow-md" type="text" name="" id="" />
            </div>

            

</div>
          
        </div>

        <div className="flex h-[100%] md:w-[20%] w-[98%] transition-all  flex-col gap-2 ">
        <div className="bg-[#FFDBDB]/[80%] flex flex-col  gap-2 backdrop-blur-md rounded-xl h-[50%] shadow-md w-[100%]">
        <div className="flex flex-col p-2 gap-[0.04rem]">
            <h1>Day Call Duration (mins)</h1>
            <input className="shadow-md" type="text" name="" id="" />
            </div>
            <div className="flex flex-col p-2 gap-[0.04rem]">
            <h1>Total Day Calls</h1>
            <input className="shadow-md" type="text" name="" id="" />
            </div>
            <div className="flex flex-col p-2 gap-[0.04rem]">
            <h1>Cumulative Day Calls Charges</h1>
            <input className="shadow-md" type="text" name="" id="" />
            </div>

            
        </div>

        

        
        <div className="bg-[#FFDBDB]/[80%] flex flex-col gap-2  backdrop-blur-md rounded-xl h-[47%]  shadow-md w-[100%]">
        <div className="flex flex-col p-2 gap-[0.04rem]">
            <h1>No of Voice Mail</h1>
            <input className="shadow-md" type="text" name="" id="" />
            </div>
            <div className="flex p-2 flex-col gap-[0.04rem]">
            <h1>No of Voice Mail</h1>
            <input className="shadow-md" type="text" name="" id="" />
            </div>
            <div className="flex p-2 flex-col gap-[0.04rem]">
            <h1>No of Voice Mail</h1>
            <input className="shadow-md" type="text" name="" id="" />
            </div>
          </div>
        </div>

        <div className="flex-grow  h-[100%] w-[98%] md:w-auto transition-all  flex md:flex-row flex-col justify-start gap-4">
        <div className="bg-[#FFDBDB]/[80%] backdrop-blur-md rounded-xl h-[45%] shadow-md w-[100%] md:w-[33%]">
        <div className="flex flex-col p-2 gap-[0.04rem]">
            <h1>Night Call Duration (mins)</h1>
            <input className="shadow-md" type="text" name="" id="" />
            </div>
            <div className="flex p-2 flex-col gap-[0.04rem]">
            <h1>Total Night Calls</h1>
            <input className="shadow-md" type="text" name="" id="" />
            </div>
            <div className="flex p-2 flex-col gap-[0.04rem]">
            <h1>Cumulative Night Calls Charges</h1>
            <input className="shadow-md" type="text" name="" id="" />
            </div>
          
          </div>

          <div className="bg-[#FFDBDB]/[80%] backdrop-blur-md rounded-xl h-[45%] shadow-md w-[100%] md:w-[33%]">
          <div className="flex flex-col p-2 gap-[0.04rem]">
            <h1>Evening Call Duration (mins)</h1>
            <input className="shadow-md" type="text" name="" id="" />
            </div>
            <div className="flex p-2 flex-col gap-[0.04rem]">
            <h1>Total Evening Calls</h1>
            <input className="shadow-md" type="text" name="" id="" />
            </div>
            <div className="flex p-2 flex-col gap-[0.04rem]">
            <h1>Cumulative Evening Calls Charges</h1>
            <input className="shadow-md" type="text" name="" id="" />
            </div>
          
          </div>


        

        </div>
        
      </div>
      
      </div>
      <div className="flex items-center justify-center flex-grow m-2 md:m-0">
        <h1 className="p-2 font-semibold text-white bg-[#29C8EB] hover:cursor-pointer hover:bg-[#29C8EB]/[80%] transition-all rounded-xl text-[1.3rem]">ANALYZE</h1>
      </div>
    </div>
  )
}
