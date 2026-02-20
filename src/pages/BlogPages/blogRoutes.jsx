import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Domination from './domination'
import Ukesportshub from './ukesportshub'
import Valorantenc from './valorantenc'

const BlogRoutes = () => {
    return (
        <Routes>
            <Route path="domination" element={<Domination/>} />
            <Route path="ukesportshub" element={<Ukesportshub/>} /> 
            <Route path="ukesportshub" element={<Valorantenc/>} />
            <Route path="*" element={<div className="p-10 text-center"><h1 className="text-4xl text-red-500">Blog Page Error</h1><p>Page Not Found</p></div>} />
        </Routes>
    )
}

export default BlogRoutes
