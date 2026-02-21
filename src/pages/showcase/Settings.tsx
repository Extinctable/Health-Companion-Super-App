import { useState } from 'react';
import SiteHeader from '../../components/SiteHeader';
import Breadcrumb from '../../components/Breadcrumb';
import SiteFooter from '../../components/SiteFooter';

export default function Settings() {
	const [profileImage, setProfileImage] = useState(
		'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
	);
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('name@example.ca');
	const [phone, setPhone] = useState('');
	const [country, setCountry] = useState('Canada');
	const [city, setCity] = useState('');
	const [address, setAddress] = useState('');
	const [organization, setOrganization] = useState('');
	const [role, setRole] = useState('');
	const [department, setDepartment] = useState('');
	const [zipCode, setZipCode] = useState('');
	const [password, setPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const [companyNews, setCompanyNews] = useState(false);
	const [accountActivity, setAccountActivity] = useState(true);
	const [meetups, setMeetups] = useState(true);
	const [newMessages, setNewMessages] = useState(false);
	const [itemUpdate, setItemUpdate] = useState(true);
	const [itemComment, setItemComment] = useState(true);
	const [buyerReview, setBuyerReview] = useState(false);
	const [dyslexiaFont, setDyslexiaFont] = useState(false);
	const [screenReader, setScreenReader] = useState(false);
	const [autismFriendly, setAutismFriendly] = useState(false);
	const [zoomText, setZoomText] = useState(false);
	const [colorblindMode, setColorblindMode] = useState('');

	const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			setProfileImage(URL.createObjectURL(file));
		}
	};

	const handleSubmit = () => {
		alert('Settings saved!');
	};

	return (
		<div className="flex min-h-screen flex-col bg-background">
			<SiteHeader />
			<Breadcrumb />
			<div className="space-y-6 bg-background p-6" role="main" aria-labelledby="user-settings-heading">
				<h1 id="user-settings-heading" className="text-2xl font-semibold text-foreground">
				User Settings
			</h1>

			<div className="rounded-lg bg-background p-6 shadow" role="region" aria-labelledby="profile-picture-heading">
				<h2 id="profile-picture-heading" className="text-xl font-semibold text-foreground">
					Profile Picture
				</h2>
				<div className="flex items-center space-x-4">
					<img className="aspect-square h-28 w-28 rounded-lg object-cover" src={profileImage} alt="Profile" />
					<div>
						<input
							type="file"
							accept="image/*"
							className="block w-full cursor-pointer rounded-lg border border-border text-sm text-foreground"
							onChange={handleFileUpload}
							aria-label="Upload a new profile picture"
						/>
					</div>
				</div>
			</div>

			<form
				onSubmit={(e) => {
					e.preventDefault();
					handleSubmit();
				}}
				className="rounded-lg bg-background p-6 shadow"
				role="region"
				aria-labelledby="general-info-heading"
			>
				<h2 id="general-info-heading" className="text-xl font-semibold text-foreground">
					General Information
				</h2>
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
					<input
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
						className="rounded border border-border bg-background p-2 text-foreground"
						placeholder="First Name"
						aria-label="First Name"
					/>
					<input
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
						className="rounded border border-border bg-background p-2 text-foreground"
						placeholder="Last Name"
						aria-label="Last Name"
					/>
					<input
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="rounded border border-border bg-background p-2 text-foreground"
						type="email"
						placeholder="Email"
						aria-label="Email Address"
					/>
					<input
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
						className="rounded border border-border bg-background p-2 text-foreground"
						type="tel"
						placeholder="Phone Number"
						aria-label="Phone Number"
					/>
				</div>
				<button className="mt-4 rounded bg-primary px-4 py-2 text-primary-foreground" type="submit" aria-label="Save general information">
					Save
				</button>
			</form>

			<div className="rounded-lg bg-background p-6 shadow" role="region" aria-labelledby="location-info-heading">
				<h2 id="location-info-heading" className="text-xl font-semibold text-foreground">
					Location Details
				</h2>
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
					<input
						value={country}
						onChange={(e) => setCountry(e.target.value)}
						className="rounded border border-border bg-background p-2 text-foreground"
						placeholder="Country"
						aria-label="Country"
					/>
					<input
						value={city}
						onChange={(e) => setCity(e.target.value)}
						className="rounded border border-border bg-background p-2 text-foreground"
						placeholder="City"
						aria-label="City"
					/>
					<input
						value={address}
						onChange={(e) => setAddress(e.target.value)}
						className="rounded border border-border bg-background p-2 text-foreground"
						placeholder="Address"
						aria-label="Address"
					/>
					<input
						value={zipCode}
						onChange={(e) => setZipCode(e.target.value)}
						className="rounded border border-border bg-background p-2 text-foreground"
						placeholder="Zip Code"
						aria-label="Zip Code"
					/>
				</div>
				<button
					className="mt-4 rounded bg-primary px-4 py-2 text-primary-foreground"
					type="submit"
					aria-label="Save Location Details"
				>
					Save Location Details
				</button>
			</div>

			<div className="rounded-lg bg-background p-6 shadow" role="region" aria-labelledby="organization-info-heading">
				<h2 id="organization-info-heading" className="text-xl font-semibold text-foreground">
					Organization Details
				</h2>
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
					<input
						value={organization}
						onChange={(e) => setOrganization(e.target.value)}
						className="rounded border border-border bg-background p-2 text-foreground"
						placeholder="Organization"
						aria-label="Organization"
					/>
					<input
						value={role}
						onChange={(e) => setRole(e.target.value)}
						className="rounded border border-border bg-background p-2 text-foreground"
						placeholder="Role"
						aria-label="Role"
					/>
					<input
						value={department}
						onChange={(e) => setDepartment(e.target.value)}
						className="rounded border border-border bg-background p-2 text-foreground"
						placeholder="Department"
						aria-label="Department"
					/>
				</div>
				<button
					className="mt-4 rounded bg-primary px-4 py-2 text-primary-foreground"
					type="submit"
					aria-label="Save Organization Details"
				>
					Save Organization Details
				</button>
			</div>

			<div className="rounded-lg bg-background p-6 shadow" role="region" aria-labelledby="notification-settings-heading">
				<h2 id="notification-settings-heading" className="text-xl font-semibold text-foreground">
					Notification Settings
				</h2>
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
					<label className="flex items-center space-x-3">
						<input type="checkbox" checked={companyNews} onChange={(e) => setCompanyNews(e.target.checked)} />
						<span>Company News</span>
					</label>
					<label className="flex items-center space-x-3">
						<input type="checkbox" checked={accountActivity} onChange={(e) => setAccountActivity(e.target.checked)} />
						<span>Account Activity</span>
					</label>
					<label className="flex items-center space-x-3">
						<input type="checkbox" checked={meetups} onChange={(e) => setMeetups(e.target.checked)} />
						<span>Meetups</span>
					</label>
					<label className="flex items-center space-x-3">
						<input type="checkbox" checked={newMessages} onChange={(e) => setNewMessages(e.target.checked)} />
						<span>New Messages</span>
					</label>
					<label className="flex items-center space-x-3">
						<input type="checkbox" checked={itemUpdate} onChange={(e) => setItemUpdate(e.target.checked)} />
						<span>Item Updates</span>
					</label>
					<label className="flex items-center space-x-3">
						<input type="checkbox" checked={itemComment} onChange={(e) => setItemComment(e.target.checked)} />
						<span>Item Comments</span>
					</label>
					<label className="flex items-center space-x-3">
						<input type="checkbox" checked={buyerReview} onChange={(e) => setBuyerReview(e.target.checked)} />
						<span>Buyer Reviews</span>
					</label>
				</div>
				<button
					className="mt-4 rounded bg-primary px-4 py-2 text-primary-foreground"
					type="submit"
					aria-label="Save Notification Settings"
				>
					Save Notification Settings
				</button>
			</div>

			<div className="rounded-lg bg-background p-6 shadow" role="region" aria-labelledby="password-heading">
				<h2 id="password-heading" className="text-xl font-semibold text-foreground">
					Password
				</h2>
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					className="w-full rounded border border-border bg-background p-2 text-foreground"
					type="password"
					placeholder="Current Password"
					aria-label="Current Password"
				/>
				<input
					value={newPassword}
					onChange={(e) => setNewPassword(e.target.value)}
					className="mt-2 w-full rounded border border-border bg-background p-2 text-foreground"
					type="password"
					placeholder="New Password"
					aria-label="New Password"
				/>
				<input
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
					className="mt-2 w-full rounded border border-border bg-background p-2 text-foreground"
					type="password"
					placeholder="Confirm Password"
					aria-label="Confirm New Password"
				/>
				<button
					className="mt-4 rounded bg-primary px-4 py-2 text-primary-foreground"
					type="submit"
					aria-label="Update Password"
				>
					Update Password
				</button>
			</div>

			<div className="rounded-lg bg-background p-6 shadow" role="region" aria-labelledby="a11y-settings-heading">
				<h2 id="a11y-settings-heading" className="text-xl font-semibold text-foreground">
					Accessibility Settings
				</h2>
				<label className="flex items-center space-x-3">
					<input type="checkbox" checked={dyslexiaFont} onChange={(e) => setDyslexiaFont(e.target.checked)} />
					<span>Dyslexia-Friendly Font</span>
				</label>
				<label className="flex items-center space-x-3">
					<input type="checkbox" checked={screenReader} onChange={(e) => setScreenReader(e.target.checked)} />
					<span>Enable Screen Reader Mode</span>
				</label>
				<label className="flex items-center space-x-3">
					<input type="checkbox" checked={autismFriendly} onChange={(e) => setAutismFriendly(e.target.checked)} />
					<span>Autism-Friendly Mode</span>
				</label>
				<label className="flex items-center space-x-3">
					<input type="checkbox" checked={zoomText} onChange={(e) => setZoomText(e.target.checked)} />
					<span>Zoom Text</span>
				</label>
				<label className="flex items-center space-x-3">
					<span>Colorblind Mode:</span>
					<select
						value={colorblindMode}
						onChange={(e) => setColorblindMode(e.target.value)}
						className="rounded border border-border bg-background p-2 text-foreground"
					>
						<option value="">None</option>
						<option value="protanopia">Protanopia</option>
						<option value="deuteranopia">Deuteranopia</option>
						<option value="tritanopia">Tritanopia</option>
					</select>
				</label>
				<button
					className="mt-4 rounded bg-primary px-4 py-2 text-primary-foreground"
					type="submit"
					aria-label="Save Accessibility Settings"
				>
					Save Accessibility Settings
				</button>
			</div>
			</div>
			<SiteFooter />
		</div>
	);
}
