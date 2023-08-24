document.addEventListener('alpine:init', () => {

	Alpine.data('TaxiQueue', () => {

		return {
			version: 'no-api-1.0',
			TaxiCount: 0,
			PassengerCount: 0,
			joinQueue() {
				this.PassengerCount++;
			},

			leaveQueue() {
				this.PassengerCount--;

			},

			joinTaxiQueue() {
				this.TaxiCount++;
			},

			queueLength() {
				return this.PassengerCount;
			}
			,
			taxiQueueLength() {
				return this.TaxiCount;
			}
			,
			taxiDepart() {

				if (this.PassengerCount >= 12 && this.TaxiCount > 0) {
					this.PassengerCount -= 12;
					this.TaxiCount--;

				}
			}
		}

	});

});