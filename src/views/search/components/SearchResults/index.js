import React from 'react'
import SearchResultsItem from './SearchResultsItem'
export const SearchResults = ({results, isSearching}) => {
    return (
        <div style={{
            width: '90%', 
            padding: '0rem 2rem 0rem 2rem',
            marginLeft: 50,
            marginRight:50,
            marginTop: 20}}>
            {!results?.length && isSearching && <p>No hay resultados</p>}    
            {results?.map((value)=>{
                return (
                    <SearchResultsItem name={value.name} email={value.email} key={value.id}/>
                )
            })}
        </div>
    )
}
