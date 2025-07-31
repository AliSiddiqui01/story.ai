import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  username: string;
  email?: string; // Optional for COPPA compliance
  birthDate?: Date; // Optional for COPPA compliance
  parentEmail?: string; // Required for users under 13
  lastLogin: Date;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema = new Schema({
  username: { 
    type: String, 
    required: true, 
    unique: true,
    trim: true,
    minlength: 3,
    maxlength: 20
  },
  email: { 
    type: String, 
    trim: true,
    lowercase: true,
    validate: {
      validator: function(v: string) {
        // Email is optional but if provided, must be valid
        return !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: 'Please enter a valid email'
    }
  },
  birthDate: { 
    type: Date,
    validate: {
      validator: function(v: Date) {
        // If provided, must be a valid date
        return !v || v < new Date();
      },
      message: 'Birth date must be in the past'
    }
  },
  parentEmail: { 
    type: String,
    trim: true,
    lowercase: true,
    validate: {
      validator: function(v: string) {
        // Required for users under 13
        return !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: 'Please enter a valid parent email'
    }
  },
  lastLogin: { 
    type: Date, 
    default: Date.now 
  },
  isVerified: { 
    type: Boolean, 
    default: false 
  }
}, {
  timestamps: true
});

// Index for efficient queries
UserSchema.index({ username: 1 });
UserSchema.index({ lastLogin: 1 });

// Add a method to check if user is subject to COPPA
UserSchema.methods.isSubjectToCOPPA = function() {
  if (!this.birthDate) return false;
  const age = Math.floor((Date.now() - this.birthDate.getTime()) / (365.25 * 24 * 60 * 60 * 1000));
  return age < 13;
};

export const User = mongoose.model<IUser>('User', UserSchema);
