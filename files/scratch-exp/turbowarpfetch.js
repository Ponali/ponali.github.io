let fetchValue = "";

class FetchExtension {
  getInfo() {
    return {
      id: 'fetcher', // change this if you make an actual extension!
      name: 'Scratch Fetch',
      blocks: [
        {
          opcode: 'getfetch',
          blockType: Scratch.BlockType.COMMAND,
          text: 'GET Fetch [ONE] with CORS: [TWO] type: [THREE]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'https://example.com/'
            },
						TWO: {
							type: Scratch.ArgumentType.BOOLEAN,
							defaultValue: true
						},
						THREE: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: "text"
						}
          }
        },
				{
          opcode: 'postfetch',
          blockType: Scratch.BlockType.COMMAND,
          text: 'POST Fetch [ONE] with CORS: [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'https://example.com/'
            },
						TWO: {
							type: Scratch.ArgumentType.BOOLEAN,
							defaultValue: true
						}
          }
        },
				{
					opcode: 'fetchval',
					blockType: Scratch.BlockType.REPORTER,
					text: 'Fetch value',
					arguments:{}
				}
      ]
    };
  };
  getfetch(args) {
    return fetch(args.ONE,{"method":"GET","mode":("no-".repeat(!args.TWO)+"cors")}).then((data)=>{data[args.THREE]()}).then((body)=>{fetchvalue = body});
  };
	postfetch(args) {
    return fetch(args.ONE,{"method":"POST","mode":("no-".repeat(!args.TWO)+"cors")}).then((data)=>{data.text()}).then((body)=>{console.log("fetch done")});
  };
	fetchval(){return fetchValue;}
}
Scratch.extensions.register(new FetchExtension());