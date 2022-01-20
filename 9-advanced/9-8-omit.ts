{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  // Omit => 타입에서 일부 프로퍼티만 사용을 강제한다.
  type VideoMetadata = Omit<Video, 'utl' | 'data'>;

  function getVideo(id: string): Video {
    return {
      id,
      title: 'video',
      url: 'https://..',
      data: 'byte-data..',
    };
  }

  function getVideoMetadata(id: string): VideoMetadata {
    return {
      id: id,
      title: 'title',
    };
  }
}
