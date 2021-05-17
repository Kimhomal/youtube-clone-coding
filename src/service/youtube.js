class Youtube {
  constructor(key) {
    this.key = key;

    this.requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }

  // 실시간 인기 영상 리스트 불러오기
  async mostPopular() {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
      this.requestOptions
    );
    const result_1 = await response.json();
    return result_1.items;
  }

  // youtube 영상 검색
  async search(query) {
    //  template literal 사용 URL ${query}
    //  template literal 사용 시 Backticks(`) 사용 필수

    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&q=${query}&key=${this.key}`,
      this.requestOptions
    );
    const result_1 = await response.json();
    return result_1.items.map((item) => ({ ...item, id: item.id.videoId }));
  }
}

export default Youtube;
