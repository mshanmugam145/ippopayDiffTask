import { useState } from 'react'
import S from './style'
import { useQuery } from 'react-query'
import axios from 'axios'

const fetchData = () => {
  return axios.get('http://localhost:3000/')
}

function AbsoluteDataTable() {

  const { isLoading, data, isError, error, isFetching, refetch } = useQuery('absolute-data', fetchData)

  if(isLoading || isFetching){
    return <h2>Loading ... </h2>
}

  if(isError){
    return <h2>{error.message}</h2>
}

  return (
    <div>

      <S.Header>
        <h1 className='text-3xl font-bold'>Data Table -  <button onClick={refetch}>Fetch</button> </h1>
      </S.Header>

      {
              data?.data.map(item => {
                    return <div key={item.id}>{item.question}</div>
                })
            }

    </div>
  )
}

export default AbsoluteDataTable