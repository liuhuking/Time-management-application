export class Task {
    constructor(
        public _id: string,
        public name: string,
        public date: Date,
        public goal: string,
        public deliverable: string,
        public priority: number,
        public startTime: Date,
        public endTime: Date,
        public reminder: string,
        public process: string[]
    ) { }
}