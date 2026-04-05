// design model for analysis 
import { Schema, model, Types } from 'mongoose'; 

//design the interface for how the data will look 
interface Dplan { 
    address: string, 
    analysis: string 
}; 

const SchemaAnalysis = new Schema<Dplan>({ 
    address: { 
        required: true, 
        type: String, 
    }, 
    analysis: { 
        required: true, 
        type: String, 
    }
}); 

const AnalysisModel = model<Dplan>('PropertyAnalysis', SchemaAnalysis); 

export default AnalysisModel;

