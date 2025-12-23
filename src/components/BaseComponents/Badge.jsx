const Badge = ({ className, children, status = "", text = "" }) => {
	const currentStatus = {
		failed: ["failed", "fail", "danger", "red"].includes(status.toLowerCase()) ? "bg-red-200/50 text-red-700" : "",
		success: ["success", "succeed", "pass", "passed", "green"].includes(status.toLowerCase()) ? "bg-green-200/50 text-green-700" : "",
		pending: ["pending", "yellow", "pend"].includes(status.toLowerCase()) ? "bg-yellow-200/50 text-yellow-700" : "",
    account: ["account", "blue", "acc"].includes(status.toLowerCase()) ? "bg-[#E2FAFF] text-[#013930]" : "",
		fallback: "bg-slate-200 text-black",
	};

  const statusClass = currentStatus.failed || currentStatus.success || currentStatus.pending || currentStatus.account || currentStatus.fallback;

	return (
		<div className={`${className} ${statusClass} flex items-center gap-x-2 text-[.8rem] py-1.5 px-3 rounded-lg rounded-no-bl leading-tight`}>
			{children ? children : text}
		</div>
	);
};

export default Badge;
