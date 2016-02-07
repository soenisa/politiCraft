var mcAPI = 'http://mcping.net/api/192.0.223.229';

var noun = ['scrub', 'nooblet', 'paladin', 'noob', 'Supreme Court Justice', 'Donald Trump', 'cat', 'Jesse', 'creeper', 'misplaced semicolon']

	function call() {
		$.getJSON(mcAPI, function(json) {
			console.log("JSON Data: " + json.online)
			var result = [];
			if(!Object.keys(json.sample)) {
				$("#players-panel").removeClass("panel-success").addClass("panel-danger");
				$("#players-panel.panel-heading").empty().append("There's no one online :(");
				$("#players-list").empty();
			}
			else {
				for(var i = 0; i < Object.keys(json.sample).length; i++) {
					var name = json.sample[i].name;
					console.log(name);
					result.push($('<li class="list-group-item"></li>').text(name));
				}

				$("#players-panel").removeClass("panel-danger").addClass("panel-success");
				$("#players-list").empty().append(result);
				var population = result.length;
				if(population > 1)
					$("#info").empty().append("There are currently <b>" + population + " " + noun[Math.floor((Math.random() * noun.length))] + "s</b> on the server.");
				else
					$("#info").empty().append("There is currently <b>1 " + noun[Math.floor((Math.random() * noun.length))] + "</b> on the server.");
			}
		});
	};