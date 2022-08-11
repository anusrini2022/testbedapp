class TestWorklet extends AudioWorkletProcessor {
    constructor(options) {
        super(options);

        // Allocate the buffer once in the beginning
        this.recordingBuffer = new Float32Array(sampleRate * 20);  // store max 20 sec audio
        this.recordingBufferOffset = 0;
    }

    process(inputs, outputs) {
        const input = inputs[0];
        const output = outputs[0];


        if (input[0])
        {
      this.port.postMessage(input[0]);
      
    return true;
    }
        // Copy samples to the recording buffer
        if (this.recordingBufferOffset < this.recordingBuffer.length - input[0].length) {
            this.recordingBuffer.set(input[0], this.recordingBufferOffset);
            this.recordingBufferOffset += input[0].length;
        }

        // Copy input to the output
        for (let channel = 0; channel < input.length; ++channel) {
            output[channel].set(input[channel]);
            
        }

        return true;
    }

    
}

registerProcessor('TestWorklet', TestWorklet);