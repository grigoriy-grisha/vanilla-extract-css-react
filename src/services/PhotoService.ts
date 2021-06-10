export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

class PhotoService {
  async getPhotos(limit?: number): Promise<Photo[]> {
    return await fetch("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=" + limit || "").then((res) =>
      res.json(),
    );
  }
}

export const photoService = new PhotoService();
