import Ajv from "ajv";
import ProjectSchema from "../schemas/Project";
import Datastore from "nedb-promises";

class ProjectStore {
    constructor() {
        const ajv = new Ajv({
            allErrors: true,
            useDefaults: true
        });
        this.schemaValidator = ajv.compile(ProjectSchema);
        const dbPath = `${process.cwd()}/projects.db`;
        this.db = Datastore.create({
            filename: dbPath,
            timestampData: true,
        });
    }

    validate(data) {
        return this.schemaValidator(data);
    }

    create(data) {
        if (this.validate(data)) {
            return this.db.insert(data);
        } else {
            return {
                error: true,
                errors: this.schemaValidator.errors
            }
        }
    }

    update(_id, data) {
        if (this.validate(data)) {
            return this.db.update({ _id }, data, { returnUpdatedDocs: true });
        } else {
            return {
                error: true,
                errors: this.schemaValidator.errors
            }
        }
    }

    get(_id) {
        return this.db.findOne({_id}).exec()
    }

    getAll() {
        return this.db.find().sort({ order: 1 }).exec()
    }

    whereTitle(title) {
        return this.db.find({title}).exec()
    }
}

const ProjectStoreInstance = new ProjectStore();
export default ProjectStoreInstance;