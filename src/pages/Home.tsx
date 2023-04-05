import { useState, useEffect } from "react";
import { api } from "../api";
import { AlbumItem } from "../components/AlbumItem";
import { Album } from "../types/Album";


export const Home = () => {
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState<Album[]>([]);

    useEffect(() => {
        loadAlbums();
    }, [])
    const loadAlbums = async () => {
        setLoading(true);
        const albums = await api.getAlbums();
        setList(albums);
        setLoading(false);
    }

    return (
        <div className="main">
            {loading && "Carregando..."}

            {list.map((item, index) => (
                <AlbumItem
                    key={index}
                    id={item.id}
                    title={item.title}
                />
            ))}
        </div>
    );
}