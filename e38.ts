function describe_city(city: string, country: string = 'UK'): void {
    console.log(`${city} is in ${country}.`);
  }
  
  describe_city('London');
  describe_city('Karachi', 'Pakistan');
  describe_city('Paris', 'France');