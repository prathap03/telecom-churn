"use client"
import Image from "next/image"
import { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"



const DropZone = ({className}) => {

    const [files,setFiles] = useState([])

    const onDrop = useCallback((acceptedFiles,rejectedFiles) => {
        if (acceptedFiles?.length){
            setFiles(previousFiles=>[
                ...previousFiles,
                ...acceptedFiles.map(file=>
                    Object.assign(file,{preview: URL.createObjectURL(file)})
                )
            ])
        } 

        if(rejectedFiles){
            rejectedFiles.map(file=>{
                alert(file.errors[0]?.message)
            })
        }
    console.log(rejectedFiles)
    },[])

    const {getRootProps,getInputProps,isDragActive} = useDropzone({onDrop,
    maxFiles:1,
accept:{
    'text/csv': ['.csv'],
}})

    const removeFile = (name)=>{
        setFiles(files => files?.filter(file=> file?.name !== name))
    }

    return (
        <form>
            <div {...getRootProps({className: className})}>
            <div className="flex flex-col gap-1 md:gap-2 items-center justify-center  h-[90%] outline-dashed outline-1 shadow-md rounded-md  w-[80%] bg-white">
          <Image
            className="md:mb-[1.5rem] mb-[0.5rem] transition-all scale-[70%] md:scale-100"
            src="/upload.png"
            width="100"
            height="100"
          />
          <h1 className="p-1 font-semibold text-white text-[0.7rem] transition-all bg-blue-500 mb-3 md:mb-0 rounded-full md:p-2 hover:cursor-pointer hover:bg-blue-700">
            Select Churn Report (csv)
          </h1>
          <h1 className="hidden transition-all ease-linear md:block font-semibold md:text-[0.7rem] lg:text-[1.1rem]">
          {isDragActive ? (
                    <p className="animate-pulse">Drop the CSV file here...</p> 
                ): (
                    <p>Drag and Drop CSV file here, or click to select file</p>
                )}
          </h1>
          <input {...getInputProps()} />
        </div>
                
                

            </div>

            {/* Preview */}

            <ul className="p-4 ">
                {files.map(file=>(
                    <li key={file.name} className="flex w-[100%]  justify-center">

                        <div className="flex max-w-[25rem] w-[100%] items-center gap-2 p-2 rounded-md shadow-md bg-gradient-to-r from-indigo-200 to-indigo-500">
                        {file.name}
                    <div className="flex gap-2 w-[100%] justify-end">
                    <button className="p-1 text-white bg-green-600 shadow-md rounded-xl" onClick={()=>{removeFile(file.name)}}>Upload</button>
                    <button className="p-1 text-white bg-red-600 shadow-md rounded-xl" onClick={()=>{removeFile(file.name)}}>Remove</button>
                    </div>
                   
                        </div>
                       
                    </li>

                ))}
            </ul>

        </form>
    )
}

export default DropZone